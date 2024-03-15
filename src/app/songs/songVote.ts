import { ISong } from "./song";

export interface ISongVote {
    "Song": ISong,
    "Rank": Number,
    "Created": Date,
    "CreatedBy": Number
}