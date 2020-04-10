- [ ] Why would you use class component over function components (removing hooks from the question)?
class components allow you to have direct access over the component lifecycle. 
	which functional components need hooks to use.
- [ ] Name three lifecycle methods and their purposes.
render(): used to render the jsx of the class, and is required in every class component
	componentDidMount(): this is used to act when the component first renders and mounts.
	componentDidUpdate(): runs anytime there is a re-render. be careful updating state in this! You'll make an infinite loop

- [ ] What is the purpose of a custom hook?
	to have the flexabilty of making reusable code you can use anywhere, even between projects.

- [ ] Why is it important to test our apps?
	proper testing leads to faster development cycles, and confidence of product. github has such robust testing, that they know if it passes, it's production worthy
