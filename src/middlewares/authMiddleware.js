import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return next({ status: 403, message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        next({ status: 401, message: 'Unauthorized: Invalid token' });
    }
};
