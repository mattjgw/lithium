from selenium import webdriver
import unittest
from initialize import setup, teardown
from homePage import homePage
from questionnairePages import *

def homePageTest():
    #should yet verify that image loaded or something more??
    driver = setup()
    homePageOb = homePage(driver)
    unittest.TestCase.assertTrue(homePageOb.verifyPageLoaded(), "failed")
    homePageOb.clickOnStartButton()

def questionnaireFlowTest():
    
    #home page
    driver = setup()
    homePageOb = homePage(driver)
    unittest.TestCase.assertTrue(homePageOb.verifyPageLoaded(), "failed")
    homePageOb.clickOnStartButton()

    #outage definition
    outageDef = outageDefinition(driver)
    unittest.TestCase.assertTrue(outageDef.verifyPageLoaded(), "failed")
    outageDef.clickRadioButton('short')  #value is either short medium or long
    outageDef.clickContinueButton()

    #housing Information
    hInfo = housingInfo(driver)
    unittest.TestCase.assertTrue(housingInfo.verifyPageLoaded(), "failed")
    hInfo.clickContinueButton()


if __name__ == "__main__":
    #homePageTest()
    questionnaireFlowTest()

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