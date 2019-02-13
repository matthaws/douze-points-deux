import { createMatchSelector } from "connected-react-router";
import { createSelector } from "reselect";

const selectScoresheetRouteParams = createMatchSelector("/scoresheet/:year");

export const selectScoresheetYear = createSelector(
  selectScoresheetRouteParams,
  ({ params }) => params.year
);
