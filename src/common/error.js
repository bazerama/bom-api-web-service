function CustomError(errorTitle, object) {
    this.errorTitle = errorTitle;
    this.errorName = object.name;
    this.errorMessage = object.message;
}

CustomError.prototype = new Error();

export default CustomError;
