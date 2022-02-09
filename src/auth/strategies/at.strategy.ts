
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {Injectable} from "@nestjs/common";


export type JwtPayload = {
    email: string;
    sub: number;
    // iat:number;
    // exp:number;
};


@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt'){
constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'at_secret',
        // secretOrKey: process.env.ACCESS_SECRET_TOKEN,

        // ignoreExpiration: false,
    });
}



    validate(payload: JwtPayload) {
        return payload;
    }
    // async validate(payload:JwtPayload){
    //     return {sub: payload.sub, email: payload.email };}


    // validate(payload:JwtPayload){
    //     console.log(payload)
    //     return payload;}




}
