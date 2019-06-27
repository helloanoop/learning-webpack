import _ from 'lodash';

const element = document.getElementById('root');

element.innerHTML = _.join(['Joined', 'using', 'lodash'], ' ');
