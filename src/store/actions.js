
export function addCollection ({ commit, state }, job_item) {
    commit('ADD_COLLECTION',job_item)
}

export function setJobList ({ commit, state }, job_list) {
    commit('SET_JOBLIST',job_list)
}
