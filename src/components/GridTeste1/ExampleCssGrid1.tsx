import './style.scss'

export default function ExampleCssGrid1() {
    return (
        <main className='pageGrid'>
            <header className='pageGrid__header pageGrid--section'>Header</header>
            <article className='pageGrid__article pageGrid--section'>Article</article>
            <aside className='pageGrid__author pageGrid--section'>Author</aside>
            <nav className='pageGrid__sidebar pageGrid--section'>Sidebar</nav>
            <footer className='pageGrid__footer pageGrid--section'> Footer</footer>
        </main>
    );
}

