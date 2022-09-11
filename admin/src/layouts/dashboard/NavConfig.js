// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Applicants',
    path: '/dashboard/applicants',
    icon: getIcon('eos-icons:job'),
  },
  {
    title: 'Jobs',
    path: '/dashboard/jobs',
    icon: getIcon('eos-icons:job'),
  },
  {
    title: 'Training Centres',
    path: '/dashboard/Center',
    icon: getIcon('eos-icons:job'),
  },
  {
    title: 'Digital Learning Programs',
    path: '/dashboard/courses',
    icon: getIcon('icon-park-outline:degree-hat'),
  },
  {
    title: 'Subscriptions',
    path: '/dashboard/subscriptions',
    icon: getIcon('eos-icons:job'),
  },
  {
    title: 'News',
    path: '/dashboard/news',
    icon: getIcon('akar-icons:newspaper'),
  },
  {
    title: 'Notifications',
    path: '/dashboard/notifications',
    icon: getIcon('carbon:notification'),
  },
  {
    title: 'Leads',
    path: '/dashboard/leads',
    icon: getIcon('icon-park-twotone:history-query'),
  },
];

export default navConfig;
