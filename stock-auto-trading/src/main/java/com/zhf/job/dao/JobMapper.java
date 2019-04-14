package com.zhf.job.dao;

import java.util.List;

import com.zhf.common.config.MyMapper;
import com.zhf.job.domain.Job;

public interface JobMapper extends MyMapper<Job> {
	
	List<Job> queryList();
}