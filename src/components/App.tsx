function App() {

    return (
        <div className="App">
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus
                    />
                </header>

                {/* This section should be hidden by default and shown when there are todos */}
                <section className="main">
                    <input
                        id="toggle-all"
                        className="toggle-all"
                        type="checkbox"
                    />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        <li>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    value={"Task 1"}
                                />
                                <label>Task 1</label>
                                <button
                                    className="destroy"
                                />
                            </div>
                        </li>

                    </ul>
                </section>

                {/*  This footer should be hidden by default and shown when there are todos */}
                <footer className="footer">
                    {/* This should be `0 items left` by default */}
                    <span className="todo-count">
                        <strong>0 </strong>
                        item left
                    </span>
                    {/* Remove this if you don't implement routing */}
                    <ul className="filters">
                        <li>
                            <a href={"/"}>All</a>
                        </li>
                        <li>
                            <a href={"/active"}>Active</a>
                        </li>
                        <li>
                            <a href={"/completed"}>Completed</a>
                        </li>
                    </ul>
                    {/* Hidden if no completed items are left ↓*/}
                    <button className="clear-completed">Clear completed</button>
                </footer>
            </section>
            <footer className="info">
                <p>Double-click to edit a todo</p>
                <p>Created by <a href="http://todomvc.com">Your name</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    );
}

export default App;