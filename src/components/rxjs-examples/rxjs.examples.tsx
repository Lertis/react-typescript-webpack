import React from "react";
import axois, { AxiosResponse } from "axios";
import { forkJoin, from, Observable, of, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, mergeMap, takeUntil } from "rxjs/operators";

export default class RxjsExamples extends React.Component<{}, { numbers: number[], inputDoubounce: string }> {
	private readonly BASE_URL = `https://jsonplaceholder.typicode.com`
	state = {
		numbers: [],
		inputDoubounce: ""
	};

	constructor(props: {}) {
		super(props);
		// Subscription section
		this.updateInput.pipe(
			takeUntil(this.destroy$),
			debounceTime(500),
			distinctUntilChanged()
		).subscribe((input: string) => {
			// setState will be triggered only after 500ms debounced time and uniq value
			this.setState({ inputDoubounce: input });
		});
	}

	private readonly updateInput: Subject<string> = new Subject<string>();
	private readonly destroy$ = new Subject<void>();
	private readonly numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	numbers$: Observable<number[]> = of(this.numbers);

	componentDidMount() {
		const getComments$ = axois.get(`${this.BASE_URL}/comments`);
		const getFirstUser$ = axois.get(`${this.BASE_URL}/users/1`);
		const getPosts$ = axois.get(`${this.BASE_URL}/posts`);

		// forkJoin section
		forkJoin([from(getFirstUser$), from(getPosts$)]).pipe(
			takeUntil(this.destroy$),
			mergeMap((
				[user, posts]:
					[
						AxiosResponse<{ id: number, name: string }>,
						AxiosResponse<{ userId: number, id: number, title: string, body: string }[]>
					]) => {
				const usersPosts = posts.data.filter((el) => el.userId === user.data.id);
				return of(usersPosts);
			})
		).subscribe((posts) => {
			console.log("[RXJS: forkJoin + mergeMap")
			console.log(posts);
		})

		forkJoin([]);
		// from section
		from(getComments$).pipe(
			takeUntil(this.destroy$)
		).subscribe((result: AxiosResponse) => {
			console.log("[RXJS: from")
			console.log(result.data as { postId: number, id: number, name: string, email: string, body: string })
		});

		// of section
		this.numbers$.pipe(
			takeUntil(this.destroy$)
		).subscribe((numbers: number[]) => {
			console.log("[RXJS: of]")
			console.log(numbers)
			this.setState({ numbers })
		});
	}

	componentWillUnmount() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	onInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		this.updateInput.next(event.target.value);
	}

	render() {
		return (
			<React.Fragment>
				<input type="text" value={this.state.inputDoubounce} onChange={this.onInputChangeHandler.bind(this)}></input>
				{this.state.numbers.map((number, i) => {
					return <div key={i + 1}>#{i + 1}: {number}</div>
				})}
			</React.Fragment>
		)
	}
}
