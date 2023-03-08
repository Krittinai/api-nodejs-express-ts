import { Router } from 'express'

export class AbstractController {
    private _router = Router()
    public get router() {
        return this._router
    }
}