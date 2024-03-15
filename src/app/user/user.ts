import { IBand } from "../bands/band";
import { ISongVote } from "../songs/songVote";

export interface IUser {
    "Name": string,
    "Bands": [IBand]
    "Votes": [ISongVote]
}