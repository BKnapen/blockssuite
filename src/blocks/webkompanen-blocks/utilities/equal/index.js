class Equal {
	constructor() {
	}
	
	check(obj, requesttype){
		if(requesttype === 'all'){
  			return Object.values(obj).every(
				(value, _index, arr) => {
    				if (value === arr[0]) {
      					return true;
    				}
						return false;
  				}
			);
		}
		if(requesttype === 'x'){
			if (obj.left === obj.right && obj.left && obj.left !== undefined && obj.left !== null) {
				return true;
			}
			return false;
		}
		if(requesttype === 'y'){
			if (obj.top === obj.bottom && obj.top && obj.top !== undefined && obj.top !== null) {
				return true;
			}
			return false;
		}
	}
}
export { Equal }