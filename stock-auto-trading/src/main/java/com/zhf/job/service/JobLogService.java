package com.zhf.job.service;

import java.util.List;

import com.zhf.common.service.IService;
import com.zhf.job.domain.JobLog;

public interface JobLogService extends IService<JobLog>{

	List<JobLog> findAllJobLogs(JobLog jobLog);

	void saveJobLog(JobLog log);
	
	void deleteBatch(String jobLogIds);
}
