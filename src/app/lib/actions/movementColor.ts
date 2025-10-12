export const movementColor = (movement: string) => {
    if (movement === 'income') {
        let success = 'success.main';
        return success;
    } else if (movement === 'bills') {
        let error = 'error.main';
        return error;
    } else if (movement === 'indicators') {
        let info = 'info.main';
        return info;
    } else if (movement === 'costs') {
        let warning = 'warning.main';
        return warning;
    } 
    let error = 'error.main';
    return error;
}