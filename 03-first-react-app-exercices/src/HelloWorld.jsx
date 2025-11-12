// const { name } = { name: "Boris" }
export function HelloWorld({ name }) {

    console.log('HelloWorld props:', { name });

    return (
        <>
            <h2>Hello, {name ?? 'World'}!</h2>
        </>
    )
}