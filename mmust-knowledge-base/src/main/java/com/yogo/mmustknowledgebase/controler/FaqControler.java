package com.yogo.mmustknowledgebase.controler;

import java.util.ArrayList;
import java.util.List;

import com.yogo.mmustknowledgebase.domain.Faq;
import com.yogo.mmustknowledgebase.domain.Question;
import com.yogo.mmustknowledgebase.repos.FaqRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

/**
 * FaqControler
 */
@RestController
@RequestMapping("/api/faq")
public class FaqControler {
    @Autowired
    private FaqRepo faqRepo;

    @GetMapping
    public Flux<Faq> getAllQuestions() {

        return faqRepo.findAll();

    }

    @GetMapping("/intent/{intent}")
    public Flux<Question> findByIntent(@PathVariable("intent") String intent) {
        return faqRepo.findAll().map(Faq::getQuestions).map(q -> q.get(0)).filter(q -> q.getIntent().equals(intent));

    }

}