import {
  BarChart,
  BuildCircle,
  Business,
  BusinessCenter,
  Equalizer,
  EuroSymbol,
  Functions,
  MonetizationOn,
  MultilineChart,
  PriceChange,
  ShowChart,
  VolumeUpSharp,
} from '@mui/icons-material';

export const formFields = [
  {name: 'symbol', Icon: EuroSymbol},
  {name: 'company_name', Icon: BusinessCenter},
  {name: 'sector', Icon: BuildCircle},
  {name: 'price', Icon: PriceChange, type: 'number', step: '0.01'},
  {name: 'volume', Icon: VolumeUpSharp, type: 'number', step: '1'},
  {name: 'day_change', Icon: Business, type: 'number', step: '0.01'},
  {
    name: 'fifty_two_week_high',
    Icon: ShowChart,
    type: 'number',
    step: '0.01',
  },
  {
    name: 'fifty_two_week_low',
    Icon: ShowChart,
    type: 'number',
    step: '0.01',
  },
  {name: 'eps', Icon: Functions, type: 'number', step: '0.01'},
  {name: 'p_e_ratio', Icon: Equalizer, type: 'number', step: '0.01'},
  {
    name: 'dividend_yield',
    Icon: MonetizationOn,
    type: 'number',
    step: '0.01',
  },
  {name: 'market_cap', Icon: BarChart, type: 'number', step: '0.01'},
  {name: 'beta', Icon: MultilineChart, type: 'number', step: '0.01'},
];
