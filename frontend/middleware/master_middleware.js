import {applyMiddleware} from 'redux';
import PokemonMiddleware from './pokemon_middleware';
import createLogger from 'redux-logger';

const MasterMiddleware = applyMiddleware(PokemonMiddleware, createLogger());
export default MasterMiddleware;
