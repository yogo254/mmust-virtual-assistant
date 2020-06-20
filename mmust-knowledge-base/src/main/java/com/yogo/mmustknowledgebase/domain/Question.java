package com.yogo.mmustknowledgebase.domain;

import java.util.List;

public class Question {
    private String intent, question, answer;
    private List<AnswerObject> answerObjects;
    private List<Link> links;
    private List<String> emails;

    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public List<AnswerObject> getAnswerObject() {
        return answerObjects;
    }

    public void setAnswerObject(List<AnswerObject> answerObject) {
        this.answerObjects = answerObject;
    }

    public List<AnswerObject> getAnswerObjects() {
        return answerObjects;
    }

    public void setAnswerObjects(List<AnswerObject> answerObjects) {
        this.answerObjects = answerObjects;
    }

    public List<Link> getLinks() {
        return links;
    }

    public void setLinks(List<Link> links) {
        this.links = links;
    }

    public List<String> getEmails() {
        return emails;
    }

    public void setEmails(List<String> emails) {
        this.emails = emails;
    }

}
