import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'MoondoD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x644a272CB3589e6Afe5077A1DB6fd214D68A3269',
    },
    tokenSymbol: 'ZEFI',
    tokenAddresses: {
      97: '',
      56: '0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
 
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'Mondo-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x91923f801A9FcC8F11Ae7c4F792CF68cb3151B99',
    },
    tokenSymbol: 'PEPR',
    tokenAddresses: {
      97: '',
      56: '0xF22a5e9a9E9685a7Cb5BB89fd4F1905A11bb2fE4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
 
  {
    pid: 0,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'bnb',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },   
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },       
  {
    pid: 7,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },     
  {
    pid: 8,
    risk: 2,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },     



 // POOLS
 
 
 {
  pid: 9,
  risk: 3,
  isTokenOnly: true,    
  lpSymbol: 'Mondo',
  lpAddresses: {
    97: '',
    56: '0x91923f801A9FcC8F11Ae7c4F792CF68cb3151B99', // Mondo-BUSD LP
  },
  tokenSymbol: 'ZEFI',
  tokenAddresses: {
    97: '',
    56: '0xF22a5e9a9E9685a7Cb5BB89fd4F1905A11bb2fE4',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 10,
  risk: 3,
  isTokenOnly: true,    
  lpSymbol: 'MoondoD',
  lpAddresses: {
    97: '',
    56: '0x644a272CB3589e6Afe5077A1DB6fd214D68A3269', // mondod-BUSD LP
  },
  tokenSymbol: 'EGG',
  tokenAddresses: {
    97: '',
    56: '0x2B46026B785c44996b76d1acc1BFDA0ebA429412',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 11,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'XWG',
  lpAddresses: {
    97: '',
    56: '0xb945abF2088591Eae759777aB36c220320363026', // XWG-BUSD LP
  },
  tokenSymbol: 'AUTO',
  tokenAddresses: {
    97: '',
    56: '0x6b23c89196deb721e6fd9726e6c76e4810a464bc',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

 {
  pid: 12,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'ETERNAL',
  lpAddresses: {
    97: '',
    56: '0xc49D3d97F1538Ad5c6BC271b932552c7e8352D37', // ETERNAL-BUSD LP
  },
  tokenSymbol: 'dot-bnb',
  tokenAddresses: {
    97: '',
    56: '0xd44fd09d74cd13838f137b590497595d6b3feea4',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 13,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'ZOO',
  lpAddresses: {
    97: '',
    56: '0xd5D00B0aD40FF6d8C1a6F7e72F185B6fB3c3fd1F', // ZOO-BUSD LP
  },
  tokenSymbol: 'BSCX',
  tokenAddresses: {
    97: '',
    56: '0x1d229b958d5ddfca92146585a8711aecbe56f095',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 14,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'SLP',
  lpAddresses: {
    97: '',
    56: '0xaF6E0e31e50575e51A8285a2D9AAe9d3A2Ad82EA', // SLP-BUSD LP
  },
  tokenSymbol: 'DOT',
  tokenAddresses: {
    97: '',
    56: '0x070a08beef8d36734dd67a491202ff35a6a16d97',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 15,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'PVU',
  lpAddresses: {
    97: '',
    56: '0x27de951fe107A4da3f849015F4F00D6E0df37c3b', // PVU-BUSD LP
  },
  tokenSymbol: 'EGG-BNB',
  tokenAddresses: {
    97: '',
    56: '0x31471e0791fcdbe82fbf4c44943255e923f1b794',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 16,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'WBNB',
  lpAddresses: {
    97: '',
    56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // bnb-BUSD LP
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 17,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'CAKE',
  lpAddresses: {
    97: '',
    56: '0x804678fa97d91B974ec2af3c843270886528a9E6', // CAKE-BUSD LP
  },
  tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 18,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'USDT',
  lpAddresses: {
    97: '',
    56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // usdt-BUSD LP
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059ff775485246999027b3197955',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 19,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'BTCB',
  lpAddresses: {
    97: '',
    56: '0xf45cd219aef8618a92baa7ad848364a158a24f33', // btcb-BUSD LP
  },
  tokenSymbol: 'BTCB',
  tokenAddresses: {
    97: '',
    56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},       


{
  pid: 20,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'ETH',
  lpAddresses: {
    97: '',
    56: '0x7213a321f1855cf1779f42c0cd85d3d95291d34c', // ETH-busd LP
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
}, 
{
  pid: 21,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'BUSD',
  lpAddresses: {
    97: '',
    56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // busd-bnb LP
  },
  tokenSymbol: 'BUSD',
  tokenAddresses: {
    97: '',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 22,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'USDC',
  lpAddresses: {
    97: '',
    56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1', // usdc-BUSD LP
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',
    56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 23,
  risk: 3,
  isTokenOnly: true,
  lpSymbol: 'DAI',
  lpAddresses: {
    97: '',
    56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // DAI-BUSD LP
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',
    56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},




]

export default farms