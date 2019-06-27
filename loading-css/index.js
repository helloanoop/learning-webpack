import _ from 'lodash';
import './index.css';

const element = document.getElementById('root');

element.innerHTML = _.join(['Joined', 'using', 'lodash'], ' ');