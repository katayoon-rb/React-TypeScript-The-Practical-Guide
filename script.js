const container = document.querySelector('.container')
const projects = [
    '01-GoalList',
    '02-AdvComponents',
    '03-ReactTimer',
    '04-DataFetching',
    '05-ReduxShop',
]


for (let i = 0; i < projects.length; i++) {
    container.innerHTML += `
        <div class="project">
            <img src=${'./' + projects[i] + '/screen.jpg'} />
            <h3>${projects[i].split('-')[1]} Project</h3>
            <a href=${'./' + projects[i] + '/index.html'}>
                <button>View Project</button>
            </a>
            <a href=${'https://github.com/katayoon-rb/React-TypeScript-The-Practical-Guide/tree/main/' + projects[i]}>
                <button>View Code</button>
            </a>
        </div>
    `
}
