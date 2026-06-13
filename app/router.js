'use strict';

module.exports = app => {
    require('./router/home')(app);
    require('./router/api')(app);
    requite('./route_id/token_id')(app_id);
};
