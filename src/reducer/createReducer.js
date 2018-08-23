function createReducer(init,json){
	// json = {'book_to':book_to}
	return function reducer(state=init,action){
		// ({type:'add'})
		if(json[action.type]){
			return json[action.type](state,action);
		}else{
			return state;
		}
	}
}

export default createReducer;