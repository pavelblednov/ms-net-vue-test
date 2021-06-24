import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
	strict: (process.env.NODE_ENV !== 'production'),

	state: {
		posts: []
	},

	mutations: {
		SET_POSTS: function (_state, _aPayload)
		{
			_state.posts = _aPayload;
		},
		UPDATE_POST: function (_state, _oPayload)
		{
			var aPosts = _state.posts,
				i, L;

			for (i = 0, L = aPosts.length; i < L; i++)
			{
				if (aPosts[i].id === _oPayload.id)
				{
					aPosts[i] = _oPayload;
					break;
				}
			}
		}
	},

	actions: {
		FETCH_POSTS: async function ({commit})
		{
			try
			{
				var oResp = await axios.get(process.env.VUE_APP_API_URL);

				commit('SET_POSTS', oResp.data);

				return oResp.data;
			}
			catch (e)
			{
				console.error(e);

				return e;
			}
		},
		UPDATE_POST: async function ({commit}, _oPayload)
		{
			try
			{
				var oResp = await axios.put(process.env.VUE_APP_API_URL +'/'+ _oPayload.id, _oPayload);

				commit('UPDATE_POST', oResp.data);
			}
			catch (e)
			{
				console.error(e);
			}
		}
	},

	getters: {
		GET_POSTS: function (_state)
		{
			return _state.posts;
		}
	},

	modules: {

	}
})
