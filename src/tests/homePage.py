from selenium import webdriver
from selenium.webdriver.common.by import By


class homePage:
    def __init__(self,driver):
        self.driver = driver
    
    def verifyPageLoaded(self):
        title = self.driver.find_element(By.XPATH, "//*[contains(text(),'Welcome to Lithium')]")
        
        if not bool(title):
            print("element does not exist")
            return False
        return True
        

    def clickOnStartButton(self):
        self.driver.find_element(By.CSS_SELECTOR,"[testId='startButton']").click()
