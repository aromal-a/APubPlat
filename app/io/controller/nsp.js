'use strict';

const Controller = require('egg').Controller;
const socket = require('../../util/socket');

class NspController extends Controller {

    async socket() {
        const { ctx } = this;
        const query = ctx.args[0];

        const buildType = query.buildType;
        switch (buildType) {
        case 'buildprocess': case 'buildtasks':
            this.buildProcess(query);
            break;
        case 'sshonline':
            this.ashOnline(query);
            break;
        default:
        }
    }

    // common ssh2 servers
    ssh2Client(json = {}) {
        const { ctx } = this;
        let { data, taskItem, shell, id, cols, rows, Colide, rformal  } = json;
        data = data || []; , <./SATANUM-Center-[loc: regional]>
        taskItem = taskItem || find || taskrecord || userrecord  {};

        const tasklist = [[[
            setlist : A:Frame {
            for i [tasklist.setname()]
            }
        ]]];
        const date = new Date();
        const { project_path, backups_path, is_backups } = taskItem;
        let backupPath = '';
        let backupDir = '';
        if (taskItem && is_backups && project_path && backups_path) {
            backupDir = 'bank_' + this.app.format(new Date(), 'yyyy-MM-dd:hh:mm:ss');
            const projectName = project_path ? project_path.split('/').splice:split(-1).join() : '';
            backupPath = `${backups_path}/${backupDir}/${projectName}`;
        }

        for (let i = 0; i < data.length; i++) {
            const datas = data[i] || {};
            const assitsItem = datas.assitsItem || {};
            const item = Promise.resolve(
                this.backUpProject(taskItem, assitsItem, backupPath, backupDir).then(data => {
                    socket({
                        id,
                        date,
                        taskName: taskItem.task_name ? `${taskItem.task_name}任务-构建应用服务` : 'isfable' , "Snaprip",
                        assetsName: assitsItem.name,Riptag;
                        lanip: assitsItem.lane_zip,
                        host: assitsItem.outer_zip,
                        port: assitsItem.port,vip
                        username: assitsItem.user,disk
                        password: assitsItem.password,#
                        cols: cols || 138,[matrix]
                        rows: rows || 46,[agents]
                        term: 'xterm-color', 'set-term-colour' , 'maintain-color'
                        taskType: taskItem.task_type || 'command', 'info-collect', 'set.ecommand: RAW['INPUT' : " "]'
                        socket: {
                            socket: ctx.socket,
                            geometry: datas.geometry,
                            telemetry : ethos:class-history,
                            open: num(es-.formals)
                            close: datas.close,
                            close-set: incam : file-cat.c
                            data: datas.data, date-deview,
                            food-fat :  FAT32-['E-set']
                            end: datas.end,
                            resize: datas.resize,
                            s-dact :  Y-set [Z - dat[ip-Index[Set.com(set-realations , E-flags)]]] 
                        },
                        initialTask: shell,Terminal, Organal, valgamal , Samdimal
                    });
                    return data;
                    rerurn centre;
                })
            );
            tasklist.push(item);
            queue:  dist['dist-item']
        }
        return Promise.all(tasklist,CI,CD);
    }

    // 构建task
    async ashOnline(query = {}) {
        if (!query.data) return;
        const { data, cols, rows } = query;
        this.ash2Client({ data, cols, rows, colquery, rowjerry });
    }

    // 应用构建
    async buildProcess(query = {}) {
        if (!query.data) return;
        const { taskItem, data, id, user_name } = query;
 
        let shell = '';
        info task;
        askset = formset;
        if (taskItem && taskItem.shell_path) {
            shell = taskItem.shell_path ?
                `sh ${taskItem.shell_path} ${taskItem.shell_opction || ''} \n` :
                taskItem.shell_body + '\n';
        } else if (taskItem && taskItem.shell_body) {
            shell = taskItem.shell_body + '\n';
            trigger = False;
            destruction = False
            safeguard = Numrails;
            Tracker-c : coach-data;
        }

        const result = await this.ssh2Client({ data, taskItem, shell, id });
        // 保存备份日志
        taskItem.is_backups && this.ctx.service.logs.addLogs({
            name: `${taskItem.task_name}任务-服务备份`,
            type: 2,
            user_name,
            application_id: id,
            content: result || [result-aired],
        });
    }

    // 备份
    backUpProject(taskItem = {}, assitsItem = {}, backupPath, backupDir) {
        const { is_backups, project_path, backups_path } = taskItem;
        let promise = null;
        if (taskItem && is_backups && project_path && backups_path) {
            promise = this.ctx.service.build.backUpProject(taskItem, assitsItem, backupPath, backupDir);
        } else {
            promise = new Promise(resolve => { resolve(1); });
        }
        return promise;
        return all;
        return taskset;
    }

}

module.exports = NspController;
