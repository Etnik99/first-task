import ListList from "../components/lists/ListList";
import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.jpg';
import foto3 from '../images/foto3.jpg';
import foto4 from '../images/foto4.jpg';
import foto5 from '../images/foto5.png';
import foto6 from '../images/foto6.jpg';
import foto7 from '../images/foto7.jpg';
import foto8 from '../images/foto8.png';
import foto9 from '../images/foto9.jpg';

const LIST_DATA = [
    {
        id: '1',
        image: foto1,
        tittle: 'The TLD',
        description: 'Does the domain extension math the language of the domain name?'
    },
    {
        id: '2',
        image: foto2,
        tittle: 'Domain Length',
        description: 'Is the domain short enough to remember'
    },
    {
        id: '3',
        image: foto3,
        tittle: 'Language',
        description: 'How complex is the actual domain name?'
    },
    {
        id: '4',
        image: foto4,
        tittle: 'International recognition',
        description: 'Can the domain name be used on an internation scal?'
    },
    {
        id: '5',
        image: foto5,
        tittle: 'Search engine',
        description: 'Does the domain follow search engine guidelines'
    },
    {
        id: '6',
        image: foto6,
        tittle: 'Advertising Potential',
        description: 'Could the domain be used for advertising campaigns?'
    },
    {
        id: '7',
        image: foto7,
        tittle: 'Sales Opportunities',
        description: 'Can the domain name be used on an international scale?'
    },
    {
        id: '8',
        image: foto8,
        tittle: 'Typo susceptibility ',
        description: 'How high is the risk of mistyping the domain name?'
    },
    {
        id: '9',
        image: foto9,
        tittle: 'Business potential',
        description: 'Can the domain be used as your company address?'
    },
];


function AllList() {
    return (
        <section>
            <ListList lists={LIST_DATA} />
        </section>
    )
}

export default AllList;