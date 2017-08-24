package bitcamp.java93.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java93.dao.ReviewDao;
import bitcamp.java93.domain.Friend;
import bitcamp.java93.domain.Review;
import bitcamp.java93.domain.Trainer;
import bitcamp.java93.service.ReviewService;

@Service
public  class ReviewServiceImpl implements ReviewService {
  @Autowired
  ReviewDao reviewDao;

  public void add(Review review) throws Exception {
    reviewDao.insert(review);
  }
  
  public List<Review> get(int no) throws Exception {
    return reviewDao.detail(no);
  }
  
  public List<Review> get2(int  no) throws Exception {
    return reviewDao.detail2(no);
  }
  public Double get3(int no) throws Exception {
    return reviewDao.detail3(no);
  }

  public void update(Review review) throws Exception {
    reviewDao.update(review.getTrano());

  }

}
