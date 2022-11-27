const args_count = (...nums) => nums.reduce(res => { return res + 1},0);

args_count(1, 2, 3, 4);