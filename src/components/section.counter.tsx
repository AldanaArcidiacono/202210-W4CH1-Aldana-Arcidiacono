export function SectionCounter() {
    //  const initialState: IState = { counter: 0 };
    //  const [state, setState] = useState(initialState);

    //  useEffect(() => {
    //      console.log(state);
    //  }, [state]);

    //  const handlerCounter = (value: number) => {
    //      setState({ ...state, counter: state.counter + value });
    //  };
    return (
        <>
            <section className="controls">
                <p className="info">0 gentlemen pointing at you</p>
                <button className="button button--select">Select all</button>
            </section>
        </>
    );
}
