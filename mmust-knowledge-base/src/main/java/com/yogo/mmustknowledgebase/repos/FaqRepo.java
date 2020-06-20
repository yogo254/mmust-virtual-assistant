package com.yogo.mmustknowledgebase.repos;

import com.yogo.mmustknowledgebase.domain.Faq;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * FaqRepo
 */
public interface FaqRepo extends ReactiveMongoRepository<Faq, String> {

}