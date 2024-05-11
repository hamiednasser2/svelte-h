import btc from '../../assets/images/svg/crypto-icons/btc.svg';
import ltc from '../../assets/images/svg/crypto-icons/ltc.svg';
import dash from '../../assets/images/svg/crypto-icons/dash.svg';
import neo from '../../assets/images/svg/crypto-icons/neo.svg';
import eth from '../../assets/images/svg/crypto-icons/eth.svg';
import aave from '../../assets/images/svg/crypto-icons/aave.svg';
import eur from '../../assets/images/svg/crypto-icons/eur.svg';
import gbp from '../../assets/images/svg/crypto-icons/gbp.svg';
import jpy from '../../assets/images/svg/crypto-icons/jpy.svg';
import xrp from '../../assets/images/svg/crypto-icons/xrp.svg';
import xmr from '../../assets/images/svg/crypto-icons/xmr.svg';
import xpm from '../../assets/images/svg/crypto-icons/xpm.svg';
import ppt from '../../assets/images/svg/crypto-icons/ppt.svg';
import sol from '../../assets/images/svg/crypto-icons/sol.svg';
import ant from '../../assets/images/svg/crypto-icons/ant.svg';
import fil from '../../assets/images/svg/crypto-icons/fil.svg';
import ada from '../../assets/images/svg/crypto-icons/ada.svg';
import dot from '../../assets/images/svg/crypto-icons/dot.svg';
import mkr from '../../assets/images/svg/crypto-icons/mkr.svg';
import yfi from '../../assets/images/svg/crypto-icons/yfi.svg';
import mln from '../../assets/images/svg/crypto-icons/mln.svg';
import vtc from '../../assets/images/svg/crypto-icons/vtc.svg';
import xsg from '../../assets/images/svg/crypto-icons/xsg.svg';
import bela from '../../assets/images/svg/crypto-icons/bela.svg';
import arn from '../../assets/images/svg/crypto-icons/arn.svg';
import cs from '../../assets/images/svg/crypto-icons/cs.svg';
import add from '../../assets/images/svg/crypto-icons/add.svg';
import atm from '../../assets/images/svg/crypto-icons/atm.svg';
import bcbc from '../../assets/images/svg/crypto-icons/bcbc.svg';
import bix from '../../assets/images/svg/crypto-icons/bix.svg';
import rise from '../../assets/images/svg/crypto-icons/rise.svg';
import ark from '../../assets/images/svg/crypto-icons/ark.svg';
import img6 from '../../assets/images/companies/img-6.png';
import img8 from '../../assets/images/companies/img-8.png';

const transactions = [
	{
		icon: 'ri-arrow-right-up-fill',
		iconClass: 'danger',
		date: '24 Dec, 2021',
		time: '08:58AM',
		image: btc,
		currency: 'BTC',
		from: 'Wallet',
		to: 'Thomas Taylor',
		details: 'Membership Fees',
		id: '16b1d9234b61e8778d9e3588f20',
		type: 'Withdraw',
		amount: '-142.35 BTC',
		amount1: '$697.88k',
		status: 'Processing'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '16 Dec, 2021',
		time: '10:58AM',
		image: eth,
		currency: 'ETH',
		from: 'Tonya Noble',
		to: 'Wallet',
		details: 'Spring Telephone Network',
		id: '0a4b5e0e15d70ce79809eabbe',
		type: 'Deposit',
		amount: '+342.35 ETH',
		amount1: '$14565.35',
		status: 'Success'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '04 Jan, 2021',
		time: '10:58AM',
		image: eur,
		currency: 'EUR',
		from: 'Nancy Martino',
		to: 'Wallet',
		details: 'Funding Purse with Payment Check',
		id: 'cca3da2b7711985361825f615e9',
		type: 'Deposit',
		amount: '+174.23 EUR',
		amount1: '$354.14',
		status: 'Failed'
	},
	{
		icon: 'ri-arrow-right-up-fill',
		iconClass: 'danger',
		date: '28 Oct, 2021',
		time: '11:42AM',
		image: gbp,
		currency: 'GBP',
		from: 'Wallet',
		to: 'Michael Morris',
		details: 'British Pound Sterling Block',
		id: '062e0e0123f2b1e9862f659c28',
		type: 'Withdraw',
		amount: '-365.00 GBP',
		amount1: '$7532.21',
		status: 'Success'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '14 Nov, 2021',
		time: '12:38PM',
		image: jpy,
		currency: 'JPY',
		from: 'Alexis Clarke',
		to: 'Wallet',
		details: 'Platinum Business',
		id: '1deffa9713917ee0af26bbb5f272',
		type: 'Deposit',
		amount: '+341.74 JPY',
		amount1: '$748.10',
		status: 'Processing'
	},
	{
		icon: 'ri-arrow-right-up-fill',
		iconClass: 'danger',
		date: '02 Jan, 2021',
		time: '08:58AM',
		image: xrp,
		currency: 'XRP',
		from: 'Wallet',
		to: 'Kevin Dawson',
		details: 'Business Advantage Fundaments - Banking',
		id: '186aa96d8014061d994f025ac4',
		type: 'Withdraw',
		amount: '-240.74 XRP',
		amount1: '$3254.20',
		status: 'Failed'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '17 Oct, 2021',
		time: '07:08PM',
		image: ltc,
		currency: 'LTC',
		from: 'Tonya Noble',
		to: 'Wallet',
		details: 'Litecoin Sale',
		id: 'c94b5581418c41c2c74448a5ec',
		type: 'Deposit',
		amount: '+298.72 LTC',
		amount1: '$149.32',
		status: 'Success'
	},
	{
		icon: 'ri-arrow-right-up-fill',
		iconClass: 'danger',
		date: '27 Dec, 2021',
		time: '01:24PM',
		image: xmr,
		currency: 'XMR',
		from: 'Wallet',
		to: 'Mary Cousar',
		details: 'Monero Purchase',
		id: '9a592451d1b0e0e5af6d4908f7',
		type: 'Withdraw',
		amount: '-365.13 XMR',
		amount1: '$754.91',
		status: 'Failed'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '23 Dec, 2021',
		time: '01:47AM',
		image: xpm,
		currency: 'XPM',
		from: 'Glen Matney',
		to: 'Wallet',
		details: 'British Pound Sterling Block',
		id: 'c1bf44fd100fff59a5c64c28dfe0',
		type: 'Deposit',
		amount: '+174.09 XPM',
		amount1: '$657.28',
		status: 'Processing'
	},
	{
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'success',
		date: '15 Dec, 2021',
		time: '08:58AM',
		image: ppt,
		currency: 'PPT',
		from: 'Timothy Smith',
		to: 'Wallet',
		details: 'British Pound Sterling Block',
		id: 'v98p141d5f4j145614sdsa78gh48t98',
		type: 'Withdraw',
		amount: '-142.35 PPT',
		amount1: '$398.35',
		status: 'Success'
	}
];

const buysellWidgets = [
	{
		id: 1,
		title: 'Total Buy',
		counter: '243',
		decimal: '10',
		icon: 'ri-shopping-bag-line',
		iconClass: 'primary'
	},
	{
		id: 2,
		title: 'Total Sell',
		counter: '658',
		decimal: '00',
		icon: 'ri-funds-line',
		iconClass: 'primary'
	},
	{
		id: 3,
		title: "Today's Buy",
		counter: '104',
		decimal: '85',
		icon: 'ri-arrow-left-down-fill',
		iconClass: 'primary'
	},
	{
		id: 4,
		title: "Today's Sell",
		counter: '87',
		decimal: '35',
		icon: 'ri-arrow-right-up-fill',
		iconClass: 'primary'
	}
];

const market = [
	{
		id: 1,
		marketId: '#VZ001',
		img: btc,
		coinName: 'Bitcoin (BTC)',
		price: '$47,071.60',
		pairs: 'BTC/USD',
		high: '$28,722.76',
		low: '$68,789.63',
		marketVolume: '$888,411,910',
		percentage: '1.50%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	},
	{
		id: 2,
		marketId: '#VZ002',
		img: eth,
		coinName: 'Ethereum (ETH)',
		price: '$3,813.14',
		pairs: 'ETH/USDT',
		high: '$4,036.24',
		low: '$3,588.14',
		marketVolume: '$314,520,675',
		percentage: '0.42%',
		icon: 'mdi mdi-trending-down',
		iconClass: 'danger'
	},
	{
		id: 3,
		marketId: '#VZ003',
		img: ltc,
		coinName: 'Litecoin (LTC)',
		price: '$149.65',
		pairs: 'LTC/USDT',
		high: '$412.96',
		low: '$104.33',
		marketVolume: '$314,520,675',
		percentage: '0.89%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	},
	{
		id: 4,
		marketId: '#VZ004',
		img: ltc,
		coinName: 'Monero (XMR)',
		price: '$17,491.16',
		pairs: 'XRM/USDT',
		high: '$31,578.35',
		low: '$8691.75',
		marketVolume: '$9,847,327',
		percentage: '1.92%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	},
	{
		id: 5,
		marketId: '#VZ005',
		img: sol,
		coinName: 'Solana (SOL)',
		price: '$172.93',
		pairs: 'SOL/USD',
		high: '$178.37',
		low: '$172.3',
		marketVolume: '$40,559,274',
		percentage: '2.87%',
		icon: 'mdi mdi-trending-down',
		iconClass: 'danger'
	},
	{
		id: 6,
		marketId: '#VZ006',
		img: ant,
		coinName: 'Aragon (ANT)',
		price: '$13.31',
		pairs: 'ANT/USD',
		high: '$13.85',
		low: '$12.53',
		marketVolume: '$156,209,195.18',
		percentage: '3.96%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	},
	{
		id: 7,
		marketId: '#VZ007',
		img: fil,
		coinName: 'Filecoin (FIL)',
		price: '$35.21',
		pairs: 'FIL/USD',
		high: '$36.41',
		low: '$35.03',
		marketVolume: '$374,618,945.51',
		percentage: '0.84%',
		icon: 'mdi mdi-trending-down',
		iconClass: 'danger'
	},
	{
		id: 8,
		marketId: '#VZ008',
		img: aave,
		coinName: 'Aave (AAVE)',
		price: '$275.47',
		pairs: 'AAVE/USDT',
		high: '$277.11',
		low: '$255.01',
		marketVolume: '$156,209,195.18',
		percentage: '8.20%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	},
	{
		id: 9,
		marketId: '#VZ009',
		img: ada,
		coinName: 'Cardano (ADA)',
		price: '$1.35',
		pairs: 'ADA/USD',
		high: '$1.39',
		low: '$1.32',
		marketVolume: '$880,387,980.14',
		percentage: '0.42%',
		icon: 'mdi mdi-trending-down',
		iconClass: 'danger'
	},
	{
		id: 10,
		marketId: '#VZ010',
		img: dot,
		coinName: 'Polkadot (DOT)',
		price: '$28.88',
		pairs: 'DOT/USD',
		high: '$30.56',
		low: '$28.66',
		marketVolume: '$880,387,980.14',
		percentage: '1.03%',
		icon: 'mdi mdi-trending-up',
		iconClass: 'success'
	}
];

const CryptoOrders = [
	{
		id: 1,
		date: '02 Jan, 2022',
		time: '03:45PM',
		img: btc,
		coinName: 'Bitcoin (BTC)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '08',
		orderValue: '$3,70,683.2',
		avgPrice: '$46,154.30',
		price: '$46,335.40',
		status: 'Successful',
		statusClass: 'success'
	},
	{
		id: 2,
		date: '27 Dec, 2021',
		time: '02:47PM',
		img: eth,
		coinName: 'Ethereum (ETH)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '50',
		orderValue: '$1,87,433',
		avgPrice: '$3,744.48',
		price: '$3,748.66',
		status: 'Cancelled',
		statusClass: 'danger'
	},
	{
		id: 3,
		date: '19 Dec, 2021',
		time: '10:24AM',
		img: mkr,
		coinName: 'Monero (XMR)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '150',
		orderValue: '$33,982.5',
		avgPrice: '$227.30',
		price: '$226.55',
		status: 'Successful',
		statusClass: 'success'
	},
	{
		id: 4,
		date: '19 Dec, 2021',
		time: '11:20AM',
		img: mkr,
		coinName: 'Maker (MKR)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '60',
		orderValue: '$1,43,445',
		avgPrice: '$2,470.30',
		price: '$2,390.75',
		status: 'Pending',
		statusClass: 'warning'
	},
	{
		id: 5,
		date: '11 Dec, 2021',
		time: '02:47PM',
		img: yfi,
		coinName: 'Yearn.finance (YFI)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '25',
		orderValue: '$9,81,906',
		avgPrice: '$37,632.17',
		price: '$39,276.24',
		status: 'Cancelled',
		statusClass: 'danger'
	},
	{
		id: 6,
		date: '05 Dec, 2021',
		time: '09:20AM',
		img: mkr,
		coinName: 'Maker (MKR)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '20',
		orderValue: '$50,243',
		avgPrice: '$2,324.65',
		price: '$2,512.15',
		status: 'Successful',
		statusClass: 'success'
	},
	{
		id: 7,
		date: '28 Nov, 2021',
		time: '11:42AM',
		img: ltc,
		coinName: 'Litecoin (LTC)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '200',
		orderValue: '$29,500',
		avgPrice: '$144.00',
		price: '$147.50',
		status: 'Pending',
		statusClass: 'warning'
	},
	{
		id: 8,
		date: '19 Nov, 2021',
		time: '03:36PM',
		img: xmr,
		coinName: 'Monero (XMR)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '75',
		orderValue: '$17,874',
		avgPrice: '$221.61',
		price: '$238.32',
		status: 'Successful',
		statusClass: 'success'
	},
	{
		id: 9,
		date: '27 Oct, 2021',
		time: '03:36PM',
		img: dash,
		coinName: 'Dash (DASH)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '45',
		orderValue: '$14,962.5',
		avgPrice: '$147.39',
		price: '$142.5',
		status: 'Cancelled',
		statusClass: 'danger'
	},
	{
		id: 10,
		date: '27 Oct, 2021',
		time: '03:36PM',
		img: neo,
		coinName: 'Neo (NEO)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '36',
		orderValue: '$77,232.24',
		avgPrice: '$2,274.21',
		price: '$2,145.34',
		status: 'Pending',
		statusClass: 'warning'
	},
	{
		id: 11,
		date: '21 Oct, 2021',
		time: '11:45AM',
		img: mln,
		coinName: 'Enzyme (MLN)',
		type: 'Sell',
		typeClass: 'danger',
		quantity: '68',
		orderValue: '$6,296.8',
		avgPrice: '$94.21',
		price: '$92.60',
		status: 'Successful',
		statusClass: 'success'
	},
	{
		id: 12,
		date: '24 Sep, 2021',
		time: '02:32AM',
		img: eth,
		coinName: 'Ethereum (ETH)',
		type: 'Buy',
		typeClass: 'success',
		quantity: '72',
		orderValue: '$2,69,602.56',
		avgPrice: '$3,744.48',
		price: '$3,748.66',
		status: 'Cancelled',
		statusClass: 'danger'
	}
];

const watchlist = [
	{
		id: 1,
		img: btc,
		coinName: 'Bitcoin',
		price: '$46,335.40',
		percentage: '+0.63%',
		percentageClass: 'success',
		coinNameAbbr: 'BTC',
		chartsColor: '#0ab39c',
		series: [
			{
				name: 'Bitcoin',
				data: [85, 68, 35, 90, 8, 11, 26, 54]
			}
		]
	},
	{
		id: 2,
		img: ltc,
		coinName: 'Litecoin',
		price: '$65.64',
		percentage: '-3.42%',
		percentageClass: 'danger',
		coinNameAbbr: 'LTC',
		chartsColor: '#f06548',
		series: [
			{
				name: 'Litecoin',
				data: [25, 50, 41, 87, 12, 36, 9, 54]
			}
		]
	},
	{
		id: 3,
		img: eth,
		coinName: 'Ethereum',
		price: '$3,748.66',
		percentage: '+0.42%',
		percentageClass: 'danger',
		coinNameAbbr: 'ETH',
		chartsColor: '#f06548',
		series: [
			{
				name: 'Ethereum',
				data: [36, 21, 65, 22, 35, 50, 29, 44]
			}
		]
	},
	{
		id: 4,
		img: xmr,
		coinName: 'Monero',
		price: '$226.55',
		percentage: '-1.92%',
		percentageClass: 'danger',
		coinNameAbbr: 'XMR',
		chartsColor: '#f06548',
		series: [
			{
				name: 'Binance',
				data: [30, 58, 29, 89, 12, 36, 9, 54]
			}
		]
	},
	{
		id: 5,
		img: dash,
		coinName: 'Dash',
		price: '$142.5',
		percentage: '+16.38%',
		percentageClass: 'success',
		coinNameAbbr: 'DASH',
		chartsColor: '#0ab39c',
		series: [
			{
				name: 'Dash',
				data: [24, 68, 39, 86, 29, 42, 11, 58]
			}
		]
	},
	{
		id: 6,
		img: mkr,
		coinName: 'Maker',
		price: '$2,390.75',
		percentage: '+0.36%',
		percentageClass: 'success',
		coinNameAbbr: 'MKR',
		chartsColor: '#0ab39c',
		series: [
			{
				name: 'Dash',
				data: [13, 76, 12, 85, 25, 60, 9, 54]
			}
		]
	},
	{
		id: 7,
		img: neo,
		coinName: 'Neo',
		price: '$2,145.65',
		percentage: '32.07%',
		percentageClass: 'success',
		coinNameAbbr: 'NEO',
		chartsColor: '#0ab39c',
		series: [
			{
				name: 'Neo',
				data: [9, 66, 41, 89, 12, 36, 25, 54]
			}
		]
	}
];

const marketStatus = [
	{
		id: 1,
		img: btc,
		marketId: '#VZ001',
		coinName: 'Bitcoin (BTC)',
		quantity: '08',
		avgPrice: '$46,154.30',
		value: '$46,335.40',
		returns: '$3,70,683.2',
		icon: 'mdi mdi-trending-up',
		percentage: '0.63%',
		percentageClass: 'success'
	},
	{
		id: 2,
		img: eth,
		marketId: '#VZ002',
		coinName: 'Ethereum (ETH)',
		quantity: '50',
		avgPrice: '$3,744.48',
		value: '$3,748.66',
		returns: '$1,87,433',
		icon: 'mdi mdi-trending-down',
		percentage: '3.42%',
		percentageClass: 'danger'
	},
	{
		id: 3,
		img: xrp,
		marketId: '#VZ003',
		coinName: 'Ripple (XRP)',
		quantity: '300',
		avgPrice: '$1.05',
		value: '$2.20',
		returns: '$660',
		icon: 'mdi mdi-trending-up',
		percentage: '1.20%',
		percentageClass: 'success'
	},
	{
		id: 4,
		img: xmr,
		marketId: '#VZ004',
		coinName: 'Monero (XMR)',
		quantity: '150',
		avgPrice: '$227.30',
		value: '$226.55',
		returns: '$33,982.5',
		icon: 'mdi mdi-trending-down',
		percentage: '1.92%',
		percentageClass: 'danger'
	},
	{
		id: 5,
		img: ltc,
		marketId: '#VZ005',
		coinName: 'Litecoin (LTC)',
		quantity: '200',
		avgPrice: '$144.00',
		value: '$147.50',
		returns: '$29,500',
		icon: 'mdi mdi-trending-down',
		percentage: '0.87%',
		percentageClass: 'danger'
	},
	{
		id: 6,
		img: aave,
		marketId: '#VZ008',
		coinName: 'Aave (AAVE)',
		quantity: '180',
		avgPrice: '$250.70',
		value: '$254.30',
		returns: '$45,774',
		icon: 'mdi mdi-trending-up',
		percentage: '3.96%',
		percentageClass: 'success'
	},
	{
		id: 7,
		img: mkr,
		marketId: '#VZ006',
		coinName: 'Maker (MKR)',
		quantity: '60',
		avgPrice: '$2,470.30',
		value: '$2,390.75',
		returns: '$1,43,445',
		icon: 'mdi mdi-trending-up',
		percentage: '0.36%',
		percentageClass: 'success'
	},
	{
		id: 8,
		img: yfi,
		marketId: '#VZ007',
		coinName: 'Yearn.finance (YFI)',
		quantity: '25',
		avgPrice: '$37,632.17',
		value: '$39,276.24',
		returns: '$9,81,906',
		icon: 'mdi mdi-trending-up',
		percentage: '3.96%',
		percentageClass: 'success'
	}
];

const CryptoicoWidgets = [
	{
		id: 1,
		label: 'ICOs Published',
		counter: '4751',
		icon: 'ri-upload-2-line',
		iconClass: 'primary'
	},
	{
		id: 2,
		label: 'Active ICOs',
		counter: '3423',
		icon: 'ri-remote-control-line',
		iconClass: 'primary'
	},
	{
		id: 3,
		label: 'ICOs Trading',
		counter: '354',
		icon: 'ri-flashlight-fill',
		iconClass: 'primary'
	},
	{
		id: 4,
		label: 'Funded ICOs',
		counter: '2762',
		icon: 'ri-hand-coin-line',
		iconClass: 'primary'
	},
	{
		id: 5,
		label: 'Upcoming ICO',
		counter: '1585',
		icon: 'ri-donut-chart-line',
		iconClass: 'primary'
	}
];

const icoWidgetsList = [
	{
		id: 1,
		title: 'Active ICOs',
		titleClass: 'success',
		subItem: [
			{
				id: 2,
				img: btc,
				label: 'Data Wallet',
				caption: 'Blockchain Services',
				amount: '$15,00,000 / $13,75,954',
				percentage: '89.97%',
				rating: '4.8',
				date: '05 Days',
				dateClass: 'success'
			},
			{
				id: 3,
				img: img6,
				label: 'GreatRiver Technology',
				caption: 'Information Technology',
				amount: '$39,00,000 / $31,57,654',
				percentage: '84.57%',
				rating: '4.4',
				date: '15 Days',
				dateClass: 'success'
			},
			{
				id: 4,
				img: vtc,
				label: 'Manta Network Finance',
				caption: 'Finance Services',
				amount: '$42,50,000 / $30,84,214',
				percentage: '70.24%',
				rating: '2.7',
				date: '25 Jan, 2022',
				dateClass: 'primary'
			},
			{
				id: 5,
				img: xsg,
				label: 'Goldfinch Network',
				caption: 'Blockchain Services',
				amount: '$28,00,000 / $8,74,986',
				percentage: '24.57%',
				rating: '3.2',
				date: '04 Feb, 2022',
				dateClass: 'primary'
			},
			{
				id: 6,
				img: img8,
				label: 'Galaxy War',
				caption: 'Gaming',
				amount: '$40,00,000 / $24,12,741 ',
				percentage: '62.04%',
				rating: '3.9',
				date: '05 March, 2022',
				dateClass: 'primary'
			}
		]
	},
	{
		id: 2,
		title: 'Ended ICOs',
		titleClass: 'danger',
		subItem: [
			{
				id: 2,
				img: bela,
				label: 'Social Chain',
				caption: 'Blockchain Services',
				amount: '$14,00,000 / $13,20,471',
				percentage: '97.62%',
				rating: '2.8',
				date: '02 Jan, 2022',
				dateClass: 'muted'
			},
			{
				id: 3,
				img: arn,
				label: 'Angels Crypto',
				caption: 'Blockchain Services',
				amount: '$75,00,000 / $59,10,412',
				percentage: '89.13%',
				rating: '2.1',
				date: '23 Dec, 2021',
				dateClass: 'muted'
			},
			{
				id: 4,
				img: cs,
				label: 'Codex Exchange',
				caption: 'Exchange',
				amount: '$32,00,000 / $28,65,732',
				percentage: '78.43%',
				rating: '3.0',
				date: '04 Oct, 2021',
				dateClass: 'muted'
			}
		]
	},
	{
		id: 3,
		title: 'Upcoming ICOs',
		titleClass: 'primary',
		subItem: [
			{
				id: 2,
				img: add,
				label: 'World Doin',
				caption: 'Blockchain Services',
				amount: '$64,00,000',
				rating: '4.7',
				date: '15 Jan, 2022',
				dateClass: 'primary '
			},
			{
				id: 3,
				img: atm,
				label: 'Bridge Plus',
				caption: 'Platform',
				amount: '$45,80,000',
				rating: '3.5',
				date: '-',
				dateClass: 'muted'
			}
		]
	},
	{
		id: 4,
		title: 'Trading ICOs',
		titleClass: 'info',
		subItem: [
			{
				id: 2,
				img: bcbc,
				label: 'PowerCoin',
				caption: 'Blockchain Services',
				amount: '$1,50,00,000 / $1,11,65,368',
				percentage: '86.61%',
				rating: '4.9',
				date: '16 Feb, 2022',
				dateClass: 'primary',
				ribbonNumber: '1'
			},
			{
				id: 3,
				img: bix,
				label: 'Cyber Wonder',
				caption: 'Platform',
				amount: '$80,00,000 / $36,40,352',
				percentage: '48.08%',
				rating: '4.7',
				date: '23 Jan, 2022',
				dateClass: 'primary',
				ribbonNumber: '2'
			},
			{
				id: 4,
				img: rise,
				label: 'RootCoin',
				caption: 'Blockchain Services',
				amount: '$95,00,000 / $78,95,041',
				percentage: '76.05%',
				rating: '3.2',
				date: '30 Dec, 2021',
				dateClass: 'primary',
				ribbonNumber: '3'
			},
			{
				id: 5,
				img: ark,
				label: 'Arcana Finance',
				caption: 'Finance Services',
				amount: '$68,00,000 / $45,85,367',
				percentage: '71.16%',
				rating: '3.2',
				date: '02 Dec, 2021',
				dateClass: 'primary',
				ribbonNumber: '4'
			}
		]
	}
];

const MOCK_DATA = {
	transactions,
	buysellWidgets,
	market,
	CryptoOrders,
	watchlist,
	marketStatus,
	CryptoicoWidgets,
	icoWidgetsList
};

export default MOCK_DATA;
