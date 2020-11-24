import { StandardScaler } from './scalers';

let scaler = new StandardScaler();

let sf = scaler.fit([ 0.55555, 77, 0.12 ]);

let sf_enc = scaler.transform(sf)
console.log(sf_enc);