package model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "scores")
public class Scores {

    // Data Members
    private int scoresId;
    private String name;
    private int scores;

    public Scores() {};

    public Scores(int scoresId, String name, int scores) {
        this.scoresId = scoreId;
        this.name = name;
        this.scores = scores;
    }

}
