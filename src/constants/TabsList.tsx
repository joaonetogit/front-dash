import FormMyDetails from '@/components/custom/FormDetails/FormMyDetails';
import type { ITabsList } from '@/types/constants/TabsList';

const DataTabsList: ITabsList[] = [
	{
		text: 'My details',
		component: <FormMyDetails />,
	},
	{
		text: 'Profile',
		component: <div>Profile</div>,
	},
	{
		text: 'Password',
		component: <div>Password</div>,
	},
	{
		text: 'Team',
		qtd: 4,
		component: <div>Team</div>,
	},
	{
		text: 'Plan',
		component: <div>Plan</div>,
	},
	{
		text: 'Billing',
		qtd: 4,
		component: <div>Billing</div>,
	},
	{
		text: 'Email',
		component: <div>Email</div>,
	},
	{
		text: 'Notifications',
		component: <div>Notifications</div>,
	},
	{
		text: 'Integrations',
		component: <div>Integrations</div>,
	},
	{
		text: 'API',
		component: <div>API</div>,
	},
] as const;

export default DataTabsList;
