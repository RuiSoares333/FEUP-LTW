<?php
    declare(strict_types = 1);

    require_once(__DIR__ . '/../database/costumer.class.php');

    function outputReview(Review $review, string $name){ ?>
        <article data-review-id = <?= $review->id?>>
            <p><span><?=$name?></span>@<?= $review->username?></p>
            <h5><?=$review->rating?>/10</h5>
            <p><?=$review->comment?></p>
        </article> 
    <?php }

    function outputReviews(array $reviews, PDO $db){ ?>
        <section id = "reviews">
            <h1>Reviews(<?=count($reviews)?>)</h1>
            <?php
                foreach($reviews as $review){
                    $name = Costumer::getName($db, $review->username);
                    outputReview($review, $name);
                }
                    
            ?>
        </section>
    <?php }
?>