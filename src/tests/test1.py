from selenium import webdriver
import time
import unittest
from initialize import setup, teardown
from homePage import homePage


driver = setup()
    
homePage = homePage(driver)
unittest.TestCase.assertTrue(homePage.verifyPageLoaded(), "failed")
homePage.clickOnStartButton()



'''
element = driver.find_element_by_name('q')
element.send_keys('test')

from selenium.webdriver.common.keys import Keys
element.send_keys(Keys.RETURN)

b_tags = driver.find_elements_by_tag_name('b')

price_list = []
for b in b_tags:
    price_list.append(b.text)

print(price_list)
'''