class LoggerService {
    static log(level, message, error = null) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;

        if (error) {
            console.error(`${logMessage} - Error: ${error.message || error}\nStack: ${error.stack || 'N/A'}`);
        } else {
            console.log(logMessage);
        }
    }

    static info(message) {
        this.log('info', message);
    }

    static error(message, error) {
        this.log('error', message, error);
    }

    static warn(message) {
        this.log('warn', message);
    }

    static debug(message) {
        this.log('debug', message);
    }
}

export default LoggerService;
