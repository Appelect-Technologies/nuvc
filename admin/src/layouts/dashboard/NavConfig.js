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
    title: 'Jobs',
    path: '/dashboard/jobs',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Digital Learning Programs',
    path: '/dashboard/courses',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Leads',
    path: '/dashboard/leads',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;
