export const getFullYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  
  export const getFooterCopy = (isIndex) => {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
  };

  export const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  };
