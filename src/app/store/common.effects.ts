import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { failed_data, Get_User_data, Store_User_data } from "./common.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ServiceService } from "../service/service.service";

@Injectable()
export class CommonEffect {
    constructor(private actions$: Actions, private service: ServiceService) { }

    public getData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(Store_User_data),
            switchMap(() => this.service.getData().pipe(
                map((userData) => Get_User_data({ userData })),
                catchError((error) => of(failed_data({ error })))
            )
            )
        )
    })
}