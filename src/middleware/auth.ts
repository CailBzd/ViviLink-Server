// src/middleware/auth.ts
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from '../entities/User';
import { AppDataSource } from '../framework_drivers/database';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,  // Assurez-vous que cela récupère correctement la clé secrète
};

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    
  console.log("PORT : " + opts.secretOrKey);
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { id: jwt_payload.userId } });

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    } catch (error) {
      console.error(error);
      return done(error, false);
    }
  })
);

export const auth = passport.authenticate('jwt', { session: false });
