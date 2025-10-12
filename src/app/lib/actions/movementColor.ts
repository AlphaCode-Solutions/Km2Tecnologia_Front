export const movementColor = (movement: string) => {
    if (movement === 'income') {
        let success = 'success.main';
        return success;
    } else if (movement === 'bills') {
        let error = 'error.main';
        return error;
    } else if (movement === 'indicators') {
        let warning = 'warning.main';
        return warning;
    } else if (movement === 'costs') {
        let error = 'error.main';
        return error;
    } 
    let info = 'info.main';
    return info;
}