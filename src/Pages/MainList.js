import CardList from "../components/lists/CardList";
import foto10 from "../images/foto10.jpeg";

const CARD_DATA = [
    {
        version: '3.3.0',
        date: '14/05/2018',
        status: {
            label: 'New',
            color: 'green',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."z',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Fix',
            color: 'blue',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Inprovement',
            color: 'purple',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.3.0',
        date: '14/05/2018',
        status: {
            label: 'New',
            color: 'green',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Fix',
            color: 'blue',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Inprovement',
            color: 'purple',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.3.0',
        date: '14/05/2018',
        status: {
            label: 'New',
            color: 'green',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Fix',
            color: 'blue',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
        version: '3.1.0',
        date: '20/05/2015',
        status: {
            label: 'Inprovement',
            color: 'purple',
        },
        image: foto10,
        author: {
            profilePic: '',
            firstName: 'Kevin',
            lastName: 'Joe'
        },
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    }
]

function MainList() {
    return (
        <div>
            <CardList cards={CARD_DATA} />
        </div>

    )
}

export default MainList;