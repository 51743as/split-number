# split-number
Generator used for randomly spliting number into sum components

# To install

npm install split-number-to-sum-components


# To use

import {splitNumber, testDistribution} from 'split-number-to-sum-components';

Example splitNumber:\
M = 167\
m = 3\
const randomArray = splitNumber(M, m);\
Result: It will split M into m random sub-sums with uniform distribution.

Example testDistribution:\
M = 167  \
m = 3  \
N = 1000\
const distributionMap = testDistribution(M, m, N);\
Result: It will give you a distribution map for N invocation times.

