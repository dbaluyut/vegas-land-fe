import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import authReducer from "../features/authentication/auth"
import highlightsReducer from "../features/highlights/highlightsSlice"
import happyHrListReducer from "../features/happyhour/happyHrListSlice"
import experiencesReducer from "../views/experiencesSlice"
import restaurantsReducer from "../views/restaurantsSlice"
import barsReducer from "../views/barsSlice"
import formReducer from "../views/recommendationsSlice"
import dashboardReducer from "../views/admin/dashboardSlice"
import dashboardTableReducer from "../ui/dashboardTableSlice"
import updateReducer from "../views/admin/updateSlice"
import addVenueReducer from "../views/admin/addVenueSlice"
import recommendationsTableReducer from "../views/admin/recommendationsTableSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    authState: authReducer,
    highlights: highlightsReducer,
    hhlist: happyHrListReducer,
    experiences: experiencesReducer,
    restaurants: restaurantsReducer,
    bars: barsReducer,
    form: formReducer,
    dashboard: dashboardReducer,
    dashboardTable: dashboardTableReducer,
    update: updateReducer,
    recommendationsTable: recommendationsTableReducer,
    addvenue: addVenueReducer,
  },
})
